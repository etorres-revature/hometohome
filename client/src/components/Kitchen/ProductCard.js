import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../../utils/Redux/Shopping/shopping-actions";

const ProductCard = ({ productData, addToCart }) => {
    // console.log("in ListingCard ~ productData import from CookListings:", productData);
    return (
        <Card>
            <CardImg top width="100%" src={productData.img} alt={productData.food} />
            <CardBody className="text-center">
                <CardTitle tag="h5" >{productData.food}</CardTitle>
                <div>
                    <CardSubtitle tag="h6" className="mb-2 text-muted float-end">${productData.price}</CardSubtitle>
                </div>
                <CardText>{productData.description}</CardText>
                <Button onClick={() => addToCart(productData.id)}>Add to Cart</Button>
            </CardBody>
        </Card>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

// export default ListingCard;
// null because not using any of the state
export default connect(null, mapDispatchToProps)(ProductCard);