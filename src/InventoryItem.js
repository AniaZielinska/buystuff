import './Inventory.css';

function InventoryItem(props) {
  return (
    <div>
        <table>
            <row>
                <h3>
                    {props.itemName}
                </h3>
            </row>
        </table>
        <p>
            {props.price}
        </p>
    </div>
  );
}

export default InventoryItem;