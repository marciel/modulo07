import produce from 'immer';

export default function cart(state = [], action){
  //console.log('teste');
  //console.log(action;
  //Cria o switch para realizar apenas a ação conforme o tipo para que não envie para todos os reducers
  switch(action.type){
    case '@cart/ADD':
       return produce(state, draft => {
         const productIndex = draft.findIndex(p => p.id === action.product.id);

         if(productIndex >= 0){
           draft[productIndex].amount += 1;
         }else{
           draft.push({
             ...action.product,
             amount: 1,
           });
         }

       });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id); //id está vindo direto da action

        if(productIndex >= 0){
           draft.splice(productIndex, 1);
        }
      });

    default:
       return state;
  }
}

/*export default function cart(state = [], action){
  //console.log('teste');
  //console.log(action;
  //Cria o switch para realizar apenas a ação conforme o tipo para que não envie para todos os reducers
  switch(action.type){
    case 'ADD_TO_CART':
       return [
         ...state,
         {
            ...action.product,
            amount: 1,
         }
      ];
    default:
       return state;
  }
}*/
