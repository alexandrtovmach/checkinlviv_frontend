// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'IzaSyCxRF0Y49oIGLYgwqnRa9BaB68sZTfb6Us',
    authDomain: 'checkinlviv2018.firebaseapp.com',
    databaseURL: 'https://checkinlviv2018.firebaseio.com',
    projectId: 'checkinlviv2018',
    storageBucket: 'checkinlviv2018.appspot.com',
    messagingSenderId: '899290146646',
    databaseAuthVariableOverride: {
      uid: 'checkinlviv-firebase'
    }
  },
  hosting: "http://localhost:4000"
};
