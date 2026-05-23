# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Setup Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook**
   - **Yahoo**
   - Or any other supported provider
4. Follow the authentication process for your chosen provider
5. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{user_name}} <{{user_email}}>
   Subject: Portfolio Contact: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Sent from your portfolio contact form
   ```
4. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key** - you'll need this later

## Step 5: Update Your Code

Replace the placeholder values in your `ContactSection.tsx`:

```typescript
// Replace these with your actual EmailJS values
const EMAILJS_SERVICE_ID = 'your_service_id_here';     // From Step 2
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';   // From Step 3  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';     // From Step 4
```

## Step 6: Test Your Form

1. Fill out your contact form with test data
2. Submit the form
3. Check your email inbox for the message
4. Check browser console for any errors

## Important Notes

- **Free Plan Limits**: 200 emails/month
- **Template Variables**: Must match form field names:
  - `user_name` → Name field
  - `user_email` → Email field  
  - `subject` → Subject field
  - `message` → Message field
- **Security**: Your public key is safe to expose in frontend code
- **CORS**: EmailJS handles CORS automatically

## Troubleshooting

### Common Issues:

1. **"User not found" error**: Check your public key
2. **"Service not found" error**: Check your service ID
3. **"Template not found" error**: Check your template ID
4. **Emails not arriving**: 
   - Check spam folder
   - Verify email service authentication
   - Test with a simple template first

### Testing Tips:

1. Start with a basic template to ensure connectivity
2. Use browser developer tools to check for errors
3. Test with different email addresses
4. Verify all form field names match template variables

## Template Example

Here's the CORRECT email template for proper sender identification:

**IMPORTANT**: Use this exact template to ensure the sender's email appears correctly:

**Subject:** Portfolio Contact: {{subject}} | From: {{user_email}}

**Body:**
```
You have received a new message from your portfolio contact form.

FROM: {{user_name}} <{{user_email}}>
TO: {{to_email}}
SUBJECT: {{subject}}

MESSAGE:
{{message}}

---
REPLY TO: {{reply_to}}

This message was sent through your portfolio contact form.
Click reply to respond directly to {{user_name}} at {{user_email}}
```

**Template Variables Required:**
- `{{user_name}}` - Sender's name
- `{{user_email}}` - Sender's email (IMPORTANT: This shows who sent the message)
- `{{subject}}` - Message subject
- `{{message}}` - Message content  
- `{{to_email}}` - Your email (recipient: kommojupavankumarganesh@gmail.com)
- `{{reply_to}}` - Sender's email for reply-to functionality

## Security Best Practices

1. ✅ **Do**: Use EmailJS public key in frontend
2. ✅ **Do**: Validate form data before sending
3. ✅ **Do**: Rate limit form submissions
4. ❌ **Don't**: Use private keys in frontend code
5. ❌ **Don't**: Send sensitive data through contact forms

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

Your contact form is now fully configured with:
- ✅ Real-time form validation
- ✅ Loading animations
- ✅ Success/error messages  
- ✅ Professional email templates
- ✅ Cross-browser compatibility
- ✅ Mobile-responsive design