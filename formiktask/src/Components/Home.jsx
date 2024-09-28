import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./BookCard";
import AxiosService from './ApiService'



const Home = () => {
    let navigate = useNavigate()
    let [book, setBook] = useState([])


    const getData = async () => {

        try {
            let res = await AxiosService.get("/books")
            console.log(res.data)
            setBook(res.data)
        } catch (error) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="homeWrapper">
                {book.map((e) => {
                    return <BookCard id={e.id} author={e.author} title={e.title} Dob={e.authorInfo.birthDate} Bio={e.authorInfo.biography} ISBN={e.ISBN} published={e.publicationDate} navigate={navigate} key={e.id} />
                })}
            </div>
        </>
    )
}

export default Home