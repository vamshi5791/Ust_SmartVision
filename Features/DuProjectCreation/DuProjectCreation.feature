Feature: DU Project Creation

    Feature Description:Successful creation of DU project
    Scenario Outline: DU Project Creation
        Given "Admin" click on create a new project

        And "Admin" enters the project name as "<projectName>"
        And "Admin" enters the project description as "<description>"
        And "Admin" clicks on save button
        And "Admin" click on select type and Select Locale as US select Domain as Finance select Document Type as Invoice and click on save button
        And "Admin" click on select classfiers and click on save button
        And "Admin" click on select extraction pipeline select Smart Extract as Smart Extract and click on save button
        And "Admin" click on OCR CONFIGURATIONS select Tesseract and click on save button
        And "Admin" select preprocessors as Barcode Page Split and Orientation Correction and click on save button
        And "Admin" click on Add all button from extraction info
        And "Admin" verify the fields to be extracted are available as "<field>" and click on save
        And "Admin" click on save in Output Configurartions
        And "Admin" verify the home page of DU application as "<projectName>"

        Examples:
            | projectName       | description | field        |
            | Automation_IB_106 | Automation  | Company Name |
