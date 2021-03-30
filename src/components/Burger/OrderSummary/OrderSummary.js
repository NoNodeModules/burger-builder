import React from "react";
import Auxiliar from "../../../hoc/Auxiliar/Auxiliar";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  // This could be a functional component, doesn't have to be a class

  // componentWillUpdate() {
  //   console.log("[OrderSummary]: updated");
  // }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    // <li>Salad: 1</li>
    return (
      <Auxiliar>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxiliar>
    );
  }
}
export default OrderSummary;
