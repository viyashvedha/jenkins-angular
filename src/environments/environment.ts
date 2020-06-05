export const environment = {
  production: false,
  environmentName: 'local',
  settings: {
    defaultRemainderTime: 10,
    globalPagination: 4,
    defaultLinkExpiryTime: 10
  },
  backEndNodeUrl: 'http://localhost:3000',
  //backEndNodeUrl: ' https://dev.lunarpen.com:3000',
  apiService: {
    'register': '/api/auth/register',
    'emailExists': '/api/auth/email-exists',
    'login': '/api/auth/login',
    'forgetpassword': '/api/auth/forget-password',
    'countrylist': '/api/auth/countries-list',
    'sentOtpMail': '/api/auth/sent-mail-otp',
    'checkDocumentSign': '/api/v1/sign-document-guest',
    'validateGuestBrowser': '/api/v1/validate-browser',
    "application": {
      'getUserDetails': "/api/v1/get-user-details",
      'updateSettings': "/api/v1/update-settings",
      'profileData': "/api/v1/get-profile-data",
      'profileImage': "/api/v1/profile-image",
      'updateUserName': "/api/v1/user-name",
      'updatePassword': "/api/v1/user-password",
      'checkPassword': "/api/v1/verify-password",
      'enableMailAuth': "/api/v1/enable-mailauth",
      'verifyMailAuth': "/api/v1/verify-mailauth",
      'enableMobileAuth': "/api/v1/enable-mobileauth",
      'verifyMobileAuth': "/api/v1/verify-mobileauth",
      'twoFactorDetails': "/api/v1/get-auth-details",
      'removeMultiAuth': "/api/v1/remove-auth",
      'removeAccount': "/api/v1/remove-account",
      'fetchSettingsDetails': "/api/v1/user-settings",
      'fetchEmailNotifications': "/api/v1/email-notification-list",
      'updateEmailNotificaion': "/api/v1/update-notification",
      'resentMail': '/api/v1/verify-email',

      //contacts
      'listContacts': "/api/v1/list-contacts",
      'createContacts': "/api/v1/create-contacts",
      'updateContacts': "/api/v1/update-contacts",
      'deleteContacts': "/api/v1/delete-contacts",

      //team
      'listTeam': "/api/v1/list-team",
      'createTeam': "/api/v1/create-team",
      'updateTeam': "/api/v1/update-team",
      'deleteTeam': "/api/v1/delete-team",

      //document
      'uploadFile': "/api/v1/upload-file",
      'openCreateDocument': "/api/v1/open-document",
      'createDoc': "/api/v1/create-document",
      'sendDocument': "/api/v1/send-document",
      'draftDocument': "/api/v1/draft-document",
      'draftList': "/api/v1/draft-list",
      'sentList': "/api/v1/sent-list",
      'receivedList': "/api/v1/received-list",
      'trashList': "/api/v1/trash-list",
      'deleteTrashList': "/api/v1/delete-trash-list",
      'deleteDraftList': "/api/v1/delete-draft-list"
    }
  }
}
