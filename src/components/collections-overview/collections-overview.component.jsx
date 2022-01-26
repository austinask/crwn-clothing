import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import CollectionPreview from "../preview-collection/collection-preview.component";

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
         {collections.map(({ id, ...otherCollectionProps}) => (
                  <CollectionPreview key={id} {...otherCollectionProps} />
              
         ))}
    </div>
);

const mapStateTopProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(
mapStateTopProps
)(CollectionsOverview);