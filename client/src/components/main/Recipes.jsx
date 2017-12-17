import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import { upvoteAction, downvoteAction } from '../../actions';
import { RecipeItem } from './Index.jsx';

class Recipes extends Component {
  renderRecipes = (index) => {
    const recipe = this.props.recipes[index];
    return (
      <RecipeItem
        key={recipe.id}
        index={recipe.id}
        recipe={recipe}
        upvote={this.props.upvoteAction}
        downvote={this.props.downvoteAction}
      />
    );
  }

  render() {
    return (
      <div className="col l5 m6 s12">
        <span>You are viewing page 1</span>
        <p className="divider" />
        <div className="row">
          {Object.keys(this.props.recipes).sort((a, b) => b - a).map(index =>
            this.renderRecipes(index))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }) => ({
  recipes: recipes.recipes,
  pagination: recipes.pagination
});

Recipes.defaultProps = {
  recipes: {},
};

Recipes.propTypes = {
  recipes: PropTypes.shape({}).isRequired,
  upvoteAction: PropTypes.func.isRequired,
  downvoteAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps,
  { upvoteAction, downvoteAction }
)(Recipes);