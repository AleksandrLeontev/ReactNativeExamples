import React, { PureComponent } from 'react';

export const cardsRequestEnhance = (ComposedComponent, modeParams, requestParams) =>

    class cardsRequestEnhance extends PureComponent {


        constructor(props) {
            super(props);

            const { navigation: { state: { params } } } = props;
            this.requestFilters = {
                                    ...modeParams,
                                    ...requestParams,
                                    ...params,
                                    navigation: props.navigation
                                  }
        }

        render() {
            return (<ComposedComponent {...this.props} {...this.requestFilters} />)
        }

    };
