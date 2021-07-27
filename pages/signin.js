import { signIn, signOut, useSession } from 'next-auth/client';

const SignIn = () => {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut('google')}>Sign out</button>
        </>
      )}
    </>
  );
};

export default SignIn;
