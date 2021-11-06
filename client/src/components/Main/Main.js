// import { Fragment } from 'react';

import Post from '../Post';
import "./Main.css";

const Main = ({
    posts
}) => {
    return (
        <main className="main-container">
            <h1>Soooooooome Heading</h1>

            <div className="posts">
                {posts.map(x =>
                    <Post
                        key={x._id}
                        content={x.content}
                        author={x.name}
                    />
                )}
            </div>

        </main>
    );
};

export default Main;