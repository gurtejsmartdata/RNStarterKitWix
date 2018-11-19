Contributing Process
====================

1. #### You'll be allocated a task to work on in trello. 

    The card that is the highest in order will be of greater priority. If you do not have any cards assigned to yourself, you can pick any component that has no tests (or lacking tests) for testing. Create a trello card name it something along the lines of `add jest spec for <component>`. Then you can continue with the process below.

2. #### Make sure you pull master all the time as changes are added frequently. 
    
    `git checkout master && git pull origin master`

3. #### Create a new branch

    Our branch names are based of our trello cards URL. So if you have a look at this URL as an example   `https://trello.com/c/7UIuixUR/208-bug-pt-clients-fetchview`, your branch name should be `208-bug-pt-clients-fetchview`. All commit message to this branch should be prefixed with the  number of your ticket. So looking at the URL again, an example commit message would be `208 some message for a commit`.

4. #### Getting information about your task

    If you have any additional questions regarding your task please ask in the general room on slack. Someone may be able to help you if not enough information is provided on the trello card.

5. #### Work completed

    Once you've finished your work and are happy with it submit a pull request (Make sure the trello card number is in the pull request name e.g - `123 some task`) and let me know the code is read for review and  testing.

    Don't forget we use flow, so make sure that you add typings to code your working on. We would also like to see testing done   (jest), please create specs where possible.

6. #### Review Cycle

    Once your code as been reviewed, you can make additional changes to your current branch if there is any comments on the pull  request that require fixes. 

7. #### Merge and release

    You won't need to worry about merging and releasing as I will handle all of that. You'll be able to continue with the next trello card.
