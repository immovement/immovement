"use client";
import Head from 'next/head'
import styles from '@/styles/Dashboard.module.scss'
import { NewPostForm } from '@/components/NewPostForm';
import { NewEventForm } from '@/components/NewEventForm';
import { Events } from '@/components/Events';
import { BlogPosts } from '@/components/BlogPosts';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';


const Dashboard = () => {
  const { user } = useAuthContext()
  const router = useRouter()

  const signOut = async () => {
      const auth = getAuth();
  
      try {
        await auth.signOut()
        router.push("/login")
      } catch (e) {
        // TODO: log error
        console.error(e)
    }
  }

  const isAdmin = user !== null && user.uid === process.env.NEXT_PUBLIC_ADMIN_UID ? true : false;

  useEffect(() => {
    if (!isAdmin) setTimeout(()=>router.push("/login"), 2000)
  }, [user])

  if (!isAdmin) return <div>Not authenticated</div>

  return (
    <>
      <Head>
        <title>im movement - dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NewPostForm/>
        <NewEventForm/>
        <BlogPosts />
        <Events />
        <button onClick={signOut}>Sign out</button>
      </main>
    </>
  )
}

export default Dashboard;

