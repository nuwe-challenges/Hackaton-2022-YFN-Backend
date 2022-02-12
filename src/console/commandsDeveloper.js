const {connection} = require("../db");
const { program } = require("commander");
const { prompt } = require("inquirer");
const Developer  = require("../models/DeveloperModel");

const developerQuestions = [
    {
        type: "input",
        message: "Put the name",
        name:"name"
    },
    {
        type: "input",
        message: "Put the email",
        name:"email"
    },
    {
        type:"list",
        name:"category",
        choices:[
            "Front","Back","Mobile", "Data",
        ]
    },
    {
        type:"input",
        message:"Put your phone",
        name:"phone"
    },
    {
        type:"list",
        name:"date",
        choices:[
            "Feb 28, 2021","Mar 1, 2021","Mar 2, 2021", "Mar 3, 2021",
        ]
    }
];

program.version("1.0.0").description("Command line tool for managing the developers of the MWC");

program.command("list").alias("l").action(async ()=> {
    const developers = await Developer.find().lean();

    if(developers.length === 0) {
        console.log("No hay developers para ver");
    } else {
        console.table(developers.map(developer => ({
            _id: developer._id.toString(),
            name: developer.name,
            email: developer.email,
            category: developer.category,
            phone:developer.phone,
            date:developer.date
        })))
    }
    await connection.close();
    process.exit(0);
});

program.command("add").alias("a").action( async ()=>{
    const answers= await prompt(developerQuestions)
    await Developer.create(answers)
    console.log("New assistant inserted")
    await connection.close()
    process.exit(0);
});


program.parse(process.argv);