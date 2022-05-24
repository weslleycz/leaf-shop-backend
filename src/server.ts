import {serverHttp} from './http'
import './webSockets';

serverHttp.listen(process.env.PORT, () =>
    console.log(`🚀 Server started on port ${process.env.PORT}`)
)
