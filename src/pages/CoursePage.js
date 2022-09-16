import React from "react";
import { Route, Routes, Router, Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styles from "./cp.module.css";
import "../dash.css";

const COURSES = gql`
  query GetCourses {
    courses {
      data {
        id
        attributes {
          courseheadline
          courseinstructor
          Page1 {
            chapterheading
            chaptercontent
          }
          courseimage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function CoursePage() {
  // GraphQL
  const { id } = useParams();
  const { loading, error, data } = useQuery(COURSES);
  // console.log("HIii" + JSON.stringify(data));
  const backend = "http://localhost:1337";
  // const { loading, error, data } = useFetch(
  //   "http://localhost:1337/api/courses?populate=*"
  // );
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  const query_data = [];
  return (
<>









      <nav>
        <header>JS Documentation</header>
        <p>
          <h1>Hello1</h1>
          {data.courses.data
            .filter((course) => course.id === id)
            .map((course) => (
              <>
                <h1>{course.attributes.courseheadline}</h1>
                <img src={backend + course.attributes.courseimage.data.attributes.url} />
                {course.attributes['Page1'].map((c) => (
                  

                  <>

      
                  <ul>
                    <h1>{c.chapterheading}</h1>
                      <li>
                        <a className={styles["nav-link"]} href="#">
                        {c.chapterheading}</a>
                      </li>
                    </ul>


</>
                ))}
              </>
            ))}
        </p>
      </nav>
      <main>
        <section id="Introduction">
          <header>Introduction</header>
        </section>
      </main>
    </>
  );
}
