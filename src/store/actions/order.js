import * as actionTypes from './actionTypes';

export const purchaseSmoothieSuccess = (id, orderData) => {
    return{
        type:actionTypes.PURCHASE_SMOOTHIE_SUCCESS,
        orderId:id,
        orderData:orderData
    };
};

export const purchaseSmoothieFail = (error) => {
    return{
        type:actionTypes.PURCHASE_SMOOTHIE_FAIL,
        error:error
    };
};

export const purchaseSmoothieStart = () => {
    return{
        type: actionTypes.PURCHASE_SMOOTHIE_START
    };
};

export const purchaseSmoothie = (orderData,token) => {
    return{
        type: actionTypes.PURCHASE_SMOOTHIE,
        orderData:orderData,
        token:token
    };
    // return dispatch => {
    //     dispatch(purchaseSmoothieStart());
    //     axios.post('/orders.json?auth=' + token, orderData)
    //         .then( response => {
    //             dispatch(purchaseSmoothieSuccess(response.data.name, orderData))
    //             //this.setState( { loading: false } );
    //             //this.props.history.push('/');
    //         } )
    //         .catch( error => {
    //             dispatch(purchaseSmoothieFail(error));
    //             //this.setState( { loading: false } );
    //         } );
    // };
};

export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersFail = (error) => {
    return{
        type:actionTypes.FETCH_ORDERS_FAIL,
        error:error
    };
};

export const fetchOrdersSuccess = (orders) => {
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    };
};

export const fetchOrdersStart = () => {
    return{
        type:actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return{
        type: actionTypes.FETCH_ORDERS,
        token:token,
        userId:userId
    };
//    return dispatch => {
//     dispatch(fetchOrdersStart());
//     const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
//         axios.get('/orders.json' + queryParams)
//         .then(res => {
//             const fetchedOrders = [];
//             for(let key in res.data){
//                 fetchedOrders.push({
//                     ...res.data[key],
//                     id:key
//                 });
//             }
//             dispatch(fetchOrdersSuccess(fetchedOrders));
//         // this.setState({loading:false, orders:fetchedOrders});
//         })
//         .catch(err =>{
//             dispatch(fetchOrdersFail(err));
//         // this.setState({loading:false});
//         });
//    };
};