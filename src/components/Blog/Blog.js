import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='mt-4'>Difference between Authorization and Authentication?</h3>
            <p className='px-3 py-2 '>- Authorization processes specifying access rights/ privileges to resources related to information security. Authentication processes of confirming the truth of an attribute of a single piece of data claimed true by an entity. Authorization checks a user's privileges to access resources. Authentication checks a person's details to identify him. Authorization validates user's permissions. Authentication verifies user's credentials. Authorization occurs after authentication. Authentication occurs before authorization.</p>

            <h3 className='mt-4'>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='px-3 py-2 '>- Firebase manages all data in Realtime Database. The Authentication is a great part of Firebase it allows easy to use SDK and ready-made UI libraries to authenticate the apps.It also provides us with dynamic links you can use dynamic links to drive the native app conversions.
                <br />
                There are lots of authentication implement here are some :- Appwrite, Back4app, Supabase, Cloudfoundry, Aws Amplify, Parse, Dokku, Kuzzle, Heroku and many other.
            </p>

            <h3 className='mt-4'>What other services does firebase provide other than authentication?</h3>
            <p className='px-3 py-2 '>- Firebase provides real-time data.The Api is ready-made. Firebase scurity is built-in in nodes.Fibase file backup is by Google Cloud. Firebase file hosting is static. Data is treated as streams. Using Firebase, you can build a highly scalable applicaiton. Firebase doesn't let you think about the infrastructure.</p>
        </div>
    );
};

export default Blog;