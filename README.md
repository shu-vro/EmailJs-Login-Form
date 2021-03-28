# EmailJs-Login-Form

Real Login Form by EmailJs &lt;HTML> { CSS } ( JavaScript )

Today, I introduce you to an JavaScript Plugin which is called [Email Js](https://www.emailjs.com/) which will work to save you from writing backend development jobs.

**Now, sending emails in page is way more easier.**

## Introduction

> Email Js is a JavaScirpt plugin in which user will sent email to us and we will be getting that **without any backend coding!**

There will be no server needed.

## Steps to start

There is 8 steps.

1. First, we have to sign up to [Email js](https://dashboard.emailjs.com/sign-up) to start every services they provide.

2. Then you have to go to `Email services` section. In here, you have to make a new service. You will be provided with a `Service Id`. It is not important to memorize it but we will be needed with that.

3. Now, you have to choose a template of your sent email. By default, you will be provided with some kind of this template. **NOTE:** You will get another `template id` and we will be using it later.

```
Subject: New message from {{from_name}}
Hello {{to_name}},

You got a new message from {{from_name}}:

{{message}}

Best wishes,
EmailJS team
```

4. Now, you have to edit it or keep it in this way. Remember, the `Double curly braces` are parameters and we can edit it in our way. We can make as much parameters as we want. In this repo, I keep it in this way.

```
Subject: {{subject}}
You got a new message from {{from_name}}:

Hello {{to_name}},

{{message}}

Best wishes,

{{from_name}}
```

5. So, there is 3 parameters. They are:

    - `from_name`
    - `to_name` (your username: default)
    - `subject`
    - `message`

    Now let's come to html.

6. To [install Email Js](https://www.emailjs.com/docs/sdk/installation/#browser-script) into our html, we have to link the following scripts in our html.

```JavaScript
<script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init("YOUR_USER_ID");
   })();
</script>
```

7. Now, that we have successfully installed emailJs, we have to write simple form in html.

```html
<form>
    <div class="input-bx">
        <i class="fas fa-user"></i>
        <input type="text" name="name" id="name" required />
        <div class="underline"></div>
        <div class="place-holder" data-text="Name"></div>
    </div>
    <div class="input-bx">
        <i class="fas fa-envelope"></i>
        <input type="email" name="email" id="email" required />
        <div class="underline"></div>
        <div class="place-holder" data-text="Email"></div>
    </div>
    <div class="input-bx">
        <i class="fas fa-terminal"></i>
        <input type="text" name="subject" id="subject" required />
        <div class="underline"></div>
        <div class="place-holder" data-text="Subject"></div>
    </div>
    <textarea
        placeholder="Message"
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
    ></textarea>
    <br />
    <input type="submit" id="submit" value="Submit" />
</form>
```

In the example, it looks very complicated but you can use only the `input` tags for your use. 

8) Now, go to your linked script file and type these following code: 

```js
// Get elements.
let form_name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

function submitEmail() {
    // Make a param object to store all the information you want to send.
    let param = {
        method: "POST",
        from_name: form_name.value,
        to_name: "Shuvro!",
        subject: subject.value,
        message: message.value,
    };

    // send method uses 3 mandatory parameters. They are: service id, template id and a object.
    // Then you have to give user a success message or error message. so, then method uses 2 mandatory methods. SUCCESS and ERROR.
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", param).then(
        function (response) {
            alert("SUCCESS! " + response.status + ' ' + response.text);
        },
        function (error) {
            alert("FAILED... " + error);
        }
    );
}

// Prevent form from submission.
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
```

### And you are done!

You just built a basic real form. You can do a lot more with the help of email js. Like: 

## Services

- You can safely transfer user's information to your email address.
- Replying on email by bot.
- Making a reCAPTCHA to verify an user.
- Adding Attachments
- Seeing who sent you email and statistics about the usage of emailJs to sent email to you.

Find more about Email Js in [Their Official Website.](https://www.emailjs.com/)
