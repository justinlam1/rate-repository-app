import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
    return (
        <View>
            <Text>Full name: {item.fullname}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Forks: {item.stargazersCount}</Text>
            <Text>Stars: {item.forksCount}</Text>
            <Text>Ratings: {item.ratingAverage}</Text>
            <Text>reviews: {item.reviewCount}</Text>
        </View>
    );
};

export default RepositoryItem;