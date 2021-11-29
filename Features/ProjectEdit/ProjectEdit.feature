@ProjectCreation @SmartVision @IE  @Regression
Feature: Project Edit

    Feature Description:Admin login to application,edits the project description and validate the toast message


    Scenario Outline: Project edit- Check whether Installation Engineer can edit project details
        And "Admin" enters Project Name as "<ProjectName>" and clicks on enter key
        And "Admin" clicks on three dots from selected project
        And "Admin" clicks on edit Project
        And "Admin" enters the Project Description as "<ProjectDescription>"
        And "Admin" clicks on update button
        Then "Admin" verifies if "success" message is displayed as "<ToastMessage>"

        Examples:
            | ProjectName      | ProjectDescription      | ToastMessage                 |
            | Automation_Demo1 | Automation_IB_Project_1 | Project Updated Successfully |

    Scenario Outline: Project edit - Project configuration - Document import configuration
        When "Admin" clicks on "Project Configuration" option
        And "Admin" clicks on "Document Import Configuration " when to execute dropdown
        And "Admin" selects when to execute time as "<Time>"
        And "Admin" edits source file location as "<Location>"
        And "Admin" clicks on save button in project configuration
        Then "Admin" verifies if "success" message is displayed as "<ToastMessage>"
        Examples:
            | Location                                                             | Time           | ToastMessage                   |
            | /home/smartops-ftp-user/IdeaBytes/WestPets_40626_9Aug2021_192715.pdf | Every 5 Minute | Project Configurations Updated |

    Scenario Outline: Project edit -Extracted fields configuration - Validation Expression
        When "Admin" clicks on "DU Configuration" option
        And "Admin" clicks on extracted fields configuration
        And "Admin" clicks on the field invoice number
        And "Admin" enters validation expression as "<Expression>"
        And "Admin" enters validation message as "<Message>"
        And "Admin" clicks on the field quantity
        And "Admin" enters field quantity validation expression as "<quantityExpression>"
       And "Admin" enters field quantity as "<quantityMessage>"
        And "Admin" clicks on save button in DU configuration
        Then "Admin" verifies if "success" message is displayed as "<ToastMessage1>"
        Then "Admin" verifies if "success" message is displayed as "<ToastMessage2>"
        Examples:

            | Expression | Message          | quantityExpression | quantityMessage | ToastMessage2                                  | ToastMessage1                                    |
            | \d{8}      | Acceptsb8 digits | \d{4}([.])\d{2}    | 9999.99         | Successfully saved the DU Field Configurations | Successfully Configured the Duplicate Validation |

