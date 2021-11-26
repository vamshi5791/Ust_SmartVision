@ProjectCreation @SmartVision @IE  @Regression

Feature: Project Creation By IE

    Feature Description : user clicks on create new project button
    and create a new project and validate the toast message

    Scenario Outline: Project Creation - Check whether Installation Engineer can create project
        When "Admin" clicks on Create New Project Button
        Then "Admin" enters the Project Name as "<ProjectName>"
        And "Admin" enters the Project Description as "<ProjectDescription>"
        And "Admin" clicks on Create Button
        Then "Admin" verifies if success message is displayed as "<ToastMessage>"
        And "Admin" should navigate to project configuration page

        Examples:
            | ProjectName      | ProjectDescription    | ToastMessage                 |
            | Automation_IB_01 | Automation_IB_Project | Project Created Successfully |

    Scenario Outline: Configuration - Project configuration - Document import configuration
        # And "Admin" enters Project Name as "<ProjectName>" and clicks on enter key
        Then "Admin" verifying the Project Configuration icon is blue "<color>" and ticked
        # When "Admin" clicks on the Project configuration icon
        When "Admin" enters when to execute as "<Time>"
        And "Admin" enters the FTP Username as "<FTPUsername>"
        And "Admin" enters the FTP Password as "<FTPPassword>"
        And "Admin" enters FTPHostName as "<FTPHostName>"

        Examples:
            | ProjectName      | Time         | FTPUsername | FTPPassword | FTPHostName | color                |
            | AUTOMATION_IB_01 | Every Minute |             |             |             | rgba(17, 67, 126, 1) |