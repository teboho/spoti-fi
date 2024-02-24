import React from "react";
import { Link } from "react-router-dom";
import {Card, Image, Typography, Flex, Button } from "antd";

const { Title }  = Typography;

const cardStyle = {
    width: 620,
    height: "auto"
};
const imgStyle = {
    display: 'block',
    width: 273
}; 

const SongItem = (props) => {
    return (
        <Card
            title={props.name}
            hoverable
            style={cardStyle}
            styles={{
                body: {
                    padding: 0,
                    overflow: "hidden",
                    background: "rgb(215,211,210)",
                    background: "linear-gradient(90deg, rgba(215,211,210,1) 0%, rgba(222,150,34,1) 35%, rgba(224,64,5,1) 100%)"
                }, 
                header: {
                    background: "rgb(215,211,210)",
                    background: "linear-gradient(90deg, rgba(215,211,210,1) 0%, rgba(222,150,34,1) 35%, rgba(224,64,5,1) 100%)"
                }
            }}
        >
            <Flex  justify="space-between">            
                <Image src={props.images.url} alt="album-art" style={imgStyle} />
                <Flex
                    vertical
                    align="flex-end"
                    justify="space-between"
                    style={{
                        padding: 32
                    }}
                >            
                    {
                        props.artists.map((artist, i) => {
                            return (
                                <Title key={"artist_" + i} level={4}>{artist.name}</Title>
                            );
                        })
                    }
                    <Button type="primary" href={props.href} target="_blank">
                        Play on Spotify
                    </Button>
                    <audio controls>
                        <source src={props.preview_url} type="audio/mpeg" />
                    </audio>
                </Flex>
                
            </Flex>
        </Card>
    );
}

export default SongItem;