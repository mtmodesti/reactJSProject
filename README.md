passar o register do form dos inputs por props para o input componente pai 
e receber no filho usando desestructuração e usando a props name(que tbem vai chegar por pros)
como parâmetro do register

ex:


const input = ({..., register, name,  ...rest}) => {
< TextField
        
          {...register(name)} 
          
        />
}

