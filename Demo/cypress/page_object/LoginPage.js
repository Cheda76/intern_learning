//Method1
class Login
{
    setUserName(username)
    {
        cy.get("#uname").type(username);
    }

    setPassword(password)
    {
        cy.get("#pwd").type(password);
    }

    clickSubmit()
    {
        cy.get("input[value='Login']").click();
    }

    veriyLogin()
    {
        cy.get("div[class='main'] h2").contains('Login Successful')
    }
}

export default Login;