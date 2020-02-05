import React, { Component } from 'react';
import { AlertIOS } from 'react-native';
// Navitaion
import { withNavigation } from 'react-navigation';
// Redux
import { connect } from 'react-redux';
// Services
import ApiService from '../../services/ApiService';
import { searchQueryAsArray } from '../../services/Utils';
// Components
import CardFullItem from '../../components/cards/CardFullItem';
import LoadingIndicator from '../../components/LoadingIndicator';

class CardFullContainer extends Component {

    state = {
        isFetchingData: true,
        article: {}
    };

    componentDidMount() {
        this.fetchArticle()
    }

    fetchArticle() {
        ApiService.fetchArticle(this.props.endpoint, this.props.id)
            .then((response) => {
                this.setState({ article: response, isFetchingData: false })
            }).catch((error) => {
                this.setState({ isFetchingData: false });
                AlertIOS.alert('Fetch article error: ', error)
            })
    }

    render() {
        const searchTerms = searchQueryAsArray(this.props.searchQuery);

        if (this.state.isFetchingData) return <LoadingIndicator />;

        return <CardFullItem {...this.props} {...searchTerms} {...this.state.article}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchQuery: state.context.searchQuery,
    }
};

export default connect(mapStateToProps)(withNavigation(CardFullContainer));
