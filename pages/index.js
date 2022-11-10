import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/header/Header";
import CardDisplay from "../components/cardDisplay/CardDisplay";
import Scroller from "../components/cardScroller/Scroller";
import CardArticle from "../components/cardArticle/CardArticle";
import CardTwoGrid from "../components/cardGrid/CardTwoGrid";
import CardThreeGrid from "../components/cardGrid/CardThreeGrid";
import CardFourGrid from "../components/cardGrid/CardFourGrid";
import VideoScroller from "../components/videoScroller/VideoScroller";
import Footer from "../components/footer/Footer";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
  });

  const cardDisplayLarge = await client.getEntries({
    content_type: "cardDisplayLarge",
  });
  const cardDisplaySmall = await client.getEntries({
    content_type: "cardDisplaySmall",
  });
  const recipeCard = await client.getEntries({ content_type: "recipeCard" });
  const articleCard = await client.getEntries({ content_type: "articleCard" });
  const videoCard = await client.getEntries({ content_type: "videoCard" });

  return {
    props: {
      cardDisplayLarge: cardDisplayLarge.items,
      cardDisplaySmall: cardDisplaySmall.items,
      recipeCard: recipeCard.items,
      articleCard: articleCard.items,
      videoCard: videoCard.items,
    },
    revalidate: 1,
  };
}

export default function Home({
  onClick,
  cardDisplayLarge,
  cardDisplaySmall,
  recipeCard,
  articleCard,
  videoCard,
}) {
  const clickHandler = (e) => {
    // console.log(e)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>my appetite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <CardDisplay
        cardDisplayLarge={cardDisplayLarge}
        cardDisplaySmall={cardDisplaySmall}
      />
      <Scroller
        onClick={(e) => clickHandler(e.target.value)}
        recipeCard={recipeCard}
        category={["Pasta", "Vegetarian", "Weeknight"]}
      />
      <CardArticle />
      <CardTwoGrid articleCard={articleCard} />
      <Scroller
        onClick={(e) => clickHandler(e.target.value)}
        recipeCard={recipeCard}
        category={["Dinner", "Dessert", "Drinks"]}
      />
      <VideoScroller />
      <CardThreeGrid articleCard={articleCard} />
      <CardFourGrid articleCard={articleCard} />
      <Footer />
    </div>
  );
}
