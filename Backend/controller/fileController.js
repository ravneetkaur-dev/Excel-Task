const exceljs= require('exceljs');
const validateSchema= require('../utils/validate.js');
const User= require('../model/user.js');

const fileController= async(req,res)=>{
    try{
      const workbook= new exceljs.Workbook();
      await workbook.xlsx.load(req.file.buffer);
      const worksheet= workbook.getWorksheet(1);

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

        // console.log("Is Zod schema:", typeof validateSchema.safeParse === "function");

        const ans= validateSchema.safeParse(rowData);

        // console.log("ROW:", rowNumber);
        // console.log("ROW DATA:", rowData);
        // console.log("PARSE RESULT:", ans);

        if(!ans.success){
          // console.log("ERROR OBJECT:", ans.error);
          // console.log("ERROR ERRORS ARRAY:", ans.error?.errors);
          invalidRecords.push({
            row: rowNumber,
            data: rowData,
            reason: ans.error?.issues?.map(e=>e.message).join(", ")
          })
        }else{
          validRecords.push(ans.data)
        }


      })

      let insertedCount=0;
      if(validRecords.length>0){
        const result= await User.insertMany(validRecords);
        insertedCount=result.length;
      }
      
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

const getValidRecords= async(req,res)=>{
  try{
    const validRecords= await User.find();
    return res.status(200).json(validRecords);
  }catch(error){
    console.error("Error while fetching the valid records!!", error);
    return res.status(500).json("Internal server error");
  }
}

module.exports= {fileController, getValidRecords};