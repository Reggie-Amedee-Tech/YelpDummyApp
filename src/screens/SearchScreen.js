import React, {useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("")

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                Term: searchTerm,
                location: 'new york'
            }
        });
        setResults(response.data.businesses)
    } catch(err) {
            console.log(err)
            setErrorMessage('Something went wrong')
        }
    }

    // Call searchApi when component
    // is first rendered. BAD CODE!

    
    return <View style={style.searchView}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <SearchBar 
        searchTerm={searchTerm} 
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onTermSubmit={() => searchApi(searchTerm)}
        />
        <Text>We have found {results.length} results!</Text>
    </View>
}

const style = StyleSheet.create({
    searchView: {
        
    }
})

export default SearchScreen;