import {createQueue} from 'kue'

const blacklisted = ["4153518780", "4153518781"]

function sendNotification(phoneNumber, message, job, done) {
if(blacklisted.includes(phoneNumber)) { 
	const errMsg = `Phone number ${phoneNumber} is blacklisted`
	job.failed().error(new Error(errMsg))
}else {
	job.progress(50)
	console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)
}

}
