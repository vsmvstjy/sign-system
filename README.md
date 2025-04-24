# Sign System with Firebase

This project integrates Firebase Firestore to store and retrieve electronic signature requests, allowing multiple devices and users.

## Files

- `firebase-config.js`: Firebase initialization and Firestore export.
- `upload.html`: Admin page to upload PDF, select signature position, and generate a shareable link. Saves data to Firestore.
- `sign.html`: User page to sign the document at the specified position and submit. Retrieves data from Firestore.
- `vercel.json`: Config for Cross-Origin-Opener-Policy to enable Google OAuth pop-ups.

## Deployment

1. Push these files to your GitHub repository (e.g., `sign-system`).
2. Connect the repository to Vercel.
3. Deploy—Vercel will serve:
   - `https://<your-vercel-domain>/upload.html`
   - `https://<your-vercel-domain>/sign.html?id=<generated-id>`

## Firebase Setup

Firestore rules (test mode, open for reads/writes):
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /signRequests/{docId} {
      allow read, write;
    }
  }
}
```

Ensure your Firebase project (`sign-system-a8921`) has a Web App registered and Firestore enabled.
