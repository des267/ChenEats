// OrderMenuCardListCustomerComp.jsx
import { OrderMenuCardCustomerComp } from './ordermenucard.customer.comp.jsx';

export const OrderMenuCardListCustomerComp = ({ menu, addToCart}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            {menu.map((menuItem) => (
                <OrderMenuCardCustomerComp key={menuItem._id} menuItem={menuItem} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default OrderMenuCardListCustomerComp;
