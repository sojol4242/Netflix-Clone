import Banner from './Banner';
import Nav from './Nav';
import requests from './Request';
import Row from './Row';

const HomeScreen = () => {
 
    return (
        <div>
            
            {/* Nav */}
            <Nav/>
      
            {/* banner */}
            <Banner/>
            
            {/* Row */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
             isLargeRow/>
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} isLargeRow/>
            <Row title="NETFLIX COMEDY" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Row title="NETFLIX HORROR" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
            <Row title="NETFLIX TRENDING" fetchUrl={requests.fetchTrending} isLargeRow/>
            <Row title="NETFLIX ROMANCE" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
        </div>
    );
};

export default HomeScreen;