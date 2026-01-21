const exceljs= require('exceljs');
const validate= require('../utils/validate.js');
const User= require('../model/user.js');

const fileController= async(req,res)=>{
    // console.log("File: ", req.file);
    // console.log("Body: ", req.body);

    // if(!req.file){
    //     return res.status(400).json({message: "No file received" });
    // }
    // return res.json({
    // message: "Multer working",
    // fileName: req.file.originalname,
    // size: req.file.size,
    // });
    try{
      const workbook= new exceljs.Workbook();
      await workbook.xlsx.load(req.file.buffer);
      const worksheet= workbook.getWorksheet(1);
      // const rows=[];

      const validRecords=[];
      const invalidRecords=[];

      worksheet.eachRow((row, rowNumber)=>{
        if(rowNumber==1){
          return;
        }
        const rowData={
          firstName:row.getCell(1).value,
          lastName: row.getCell(2).value,
          email: row.getCell(3).value,
          phone: row.getCell(4).value,
          gender: row.getCell(5).value
        }

        const errors=validate(rowData);
        // rows.push({
        //   rowNumber,
        //   values:row.values
        // });

        if(errors.length>0){
          invalidRecords.push({
            row: rowNumber,
            data: rowData,
            reason:errors.join(', ')
          })
        }else{
          validRecords.push(rowData)
        }

        // console.log("Row: ",rowNumber, rowData);
      })

      let insertedCount=0;
      if(validRecords.length>0){
        const result= await User.insertMany(validRecords);
        insertedCount=result.length;
      }
      
      // return res.json({message:"Excel read successfully...", totalRows:rows.length})
      return res.json({
        totalRecords: validRecords.length+ invalidRecords.length,
        successRecords: validRecords.length,
        errorRecords: invalidRecords.length,
        errors: invalidRecords
      })
    }catch(err){
      console.error(err);
      return res.status(500).json("Failed to read the excel file");
    }
  
}

module.exports= {fileController};