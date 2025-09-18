# Google Analytics Setup Guide

## Environment Variables Setup

To complete the Google Analytics integration, you need to create an environment file with your Google Analytics tracking ID.

### Step 1: Create Environment File

Create a `.env` file in your project root directory with the following content:

```env
# Google Analytics Configuration
# Replace G-XXXXXXXXXX with your actual Google Analytics 4 Measurement ID
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Step 2: Get Your Google Analytics ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property or create a new one
3. Go to **Admin** (gear icon in bottom left)
4. Under **Property**, click **Data Streams**
5. Click on your web stream or create a new one
6. Copy the **Measurement ID** (starts with `G-`)

### Step 3: Update Your Environment File

Replace `G-XXXXXXXXXX` in your `.env` file with your actual Measurement ID.

Example:
```env
VITE_GA_TRACKING_ID=G-ABC123DEF4
```

### Step 4: Restart Your Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
# or
yarn dev
```

### Step 5: Verify Setup

1. Open your website in the browser
2. Open Developer Tools (F12)
3. Go to the **Network** tab
4. Look for requests to `google-analytics.com` or `googletagmanager.com`
5. Check the **Console** tab for any Google Analytics related messages

### Production Deployment

For production deployment, make sure to set the environment variable in your hosting platform:

- **Vercel**: Add `VITE_GA_TRACKING_ID` in Environment Variables
- **Netlify**: Add `VITE_GA_TRACKING_ID` in Site Settings > Environment Variables
- **Other platforms**: Set the environment variable according to your platform's documentation

### What's Being Tracked

Once set up, the following will be automatically tracked:

- ✅ Page views on route changes
- ✅ Order button clicks (with source location)
- ✅ Catering inquiry clicks (with source location)
- ✅ Custom events (when implemented)

### Troubleshooting

If Google Analytics isn't working:

1. **Check the tracking ID**: Make sure it starts with `G-` and is correct
2. **Check environment variable**: Ensure `VITE_GA_TRACKING_ID` is set correctly
3. **Check browser console**: Look for any JavaScript errors
4. **Check network requests**: Verify requests are being sent to Google Analytics
5. **Wait for data**: It can take 24-48 hours for data to appear in Google Analytics

### Privacy Considerations

The current setup respects user privacy and follows GDPR guidelines. If you need to implement cookie consent, you can extend the existing `CookieConsent` component to include Google Analytics consent.
