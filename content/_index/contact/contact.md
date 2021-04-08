+++
fragment = "contact"
#disabled = true
date = "2017-09-10"
weight = 260
background = "dark"
form_name = "contact"

title = "We want to hear from you"
#subtitle  = "Fill out this form and we will get in touch shortly"
#title_align = "left" # Default is center, can be left, right or center

# PostURL can be used with backends such as formspree, or mailout from caddy
post_url = "https://getform.io/f/f31fe965-e20a-4528-bc75-9ecceccf8853"
email = "info@ailabconsulting.com"
button_text = "Send" # defaults to theme default
#netlify = false

# Optional google captcha
# Won't be used if netlify is enabled
#[recaptcha]
#  sitekey = ""

[message]
  success = "Thank you for awesomely contacting us." # defaults to theme default
  error = "Message could not be send. Please contact us at mail@example.com instead." # defaults to theme default

# Only defined fields are shown in contact form
[fields.name]
  text = "Your Name"
  error = "Please enter your name" # defaults to theme default

[fields.email]
  text = "Your Email"
  error = "Please enter your email address" # defaults to theme default

[fields.phone]
  text = "Your Phone"
  error = "Please enter your phone number" # defaults to theme default

[fields.message]
  text = "Your Message"
  error = "Please enter a message" # defaults to theme default

# Optional hidden form fields
# Fields "page" and "site" will be autofilled
[[fields.hidden]]
  name = "page"


+++


You can modify your privacy settings and unsubscribe from our lists at any time (see our privacy policy).

This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply.
