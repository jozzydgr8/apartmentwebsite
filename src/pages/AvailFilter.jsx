import { Select } from "antd"

export const AvailFilter= ()=>{
    const types = ['2 bedroom duplex', '1 bedroom duplex', '3 bedroom duplex',
         'private lounge', 'private swimming pool'
        ]
    return(
        <section className="availSection">
            <div className='availSectiondiv container-fluid'>
                
                <form>
                    <div style={{ width:'100%'}} >
                        what are you looking for
                        <Select 
                        style={{width:'100%'}}
                        mode="multiple"
                        maxTagCount={2}
                         >
                            
                            {
                                types.map((type, index)=>(
                                    <Select.Option key={index} value={type} />
                                ))
                            }
                        </Select>
                        <button style={{margin:'7px 0'}}>check availability</button>
                    </div>
                    
                </form>
            </div>
        </section>
    )
}