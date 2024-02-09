import {createQueue} from "kue"

const queue = createQueue()
const jobData = {
  "phoneNumber": "12345678",
  "message": "Hello Kue",
}

const job = queue.create("push_notification_code",jobData).save( (err) => {
   if(err) {
	   console.log("Notification job failed")
   } else {
	   console.log(`Notification job created: ${job.id}`)
   }

})
 .on('complete', (result) => {
	 console.log('Notification job completed')
 })
 .on('failed', (err) => {
	 console.log('Notification job failed')
 })
