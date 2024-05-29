export default function handler(req,res) {
    // console.log(req.body);
    if (req.method === 'Post') {
        const data = req.body;
        if (!values.name || !values.email || !values.subject || !values.message) {
            return res.status(400)
            .json({
                message:'please fill all the fields'

            })
        }
        
    }
    res.status(400)
    .json({
       message:'Something went wrong'
    })
}