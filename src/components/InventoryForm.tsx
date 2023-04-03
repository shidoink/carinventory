import Input from './Input'
import {useForm} from 'react-hook-form'
import { server_calls } from '../api/server'
import {useDispatch, useStore} from 'react-redux'
import { chooseMake, chooseHorsePower, chooseModel, chooseValue, chooseYear } from '../redux/slices/RootSlice'

interface InventoryFormProps{
    id?: string[]
}

const InventoryForm = ( props: InventoryFormProps) => {
    const {register, handleSubmit}= useForm({})
    const dispatch = useDispatch();
    const store = useStore();

const onSubmit = ( data: any, event:any)=>{
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length>0){
        server_calls.update(props.id[0], data)
        setTimeout(()=>{window.location.reload()},1000)
        console.log(`Updated: ${data.make} ${props.id}`)
        setTimeout(()=>{window.location.reload()},1000)
        event.target.reset()
    } else {
        dispatch(chooseMake(data.make));
        dispatch(chooseHorsePower(data.horse_power));
        dispatch(chooseModel(data.model));
        dispatch(chooseYear(data.year));
        dispatch(chooseValue(data.value));

        server_calls.create(store.getState())
        setTimeout(()=> {window.location.reload()}, 1000);
    }
}

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="make"> Make</label>
            <Input {...register('make')} name='make' placeholder ='Make'/>
        </div>
        <div>
            <label htmlFor="model"> Model</label>
            <Input {...register('model')} name='model' placeholder ='Model'/>
        </div>
        <div>
            <label htmlFor="year"> Year</label>
            <Input {...register('year')} name='year' placeholder ='Year'/>
        </div>
        <div>
            <label htmlFor="value"> Value</label>
            <Input {...register ('value')}name='value' placeholder ='Value'/>
        </div>
        <div>
            <label htmlFor="horse_power"> Horse Power</label>
            <Input {...register('horse_power')} name='horse_power' placeholder ='Horse Power'/>
        </div>
        <div className="flex p-1">
            <button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                Submit</button>
        </div>
      </form>
    </div>
  )
}

export default InventoryForm
