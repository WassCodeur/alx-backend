import createPushNotificationsJobs  from './8-job.js'
import kue from 'kue'
import assert from 'assert'

describe('createPushNotificationsJobs', () => {
   let queue;
   beforeEach(() => {
        queue = kue.createQueue();
    });
    afterEach(() => {
	    queue.testMode.clear()
    })
     it('display a error message if jobs is not an array', () => {
        assert.throws(() => {
         createPushNotificationsJobs({}, queue);
        }, /Jobs is not an array/)
    });
     it('create three new jobs to the queue', () => {
        const jobs = [
    {
        'phoneNumber': '4153518780',
        'message': 'This is the code 1234 to verify your account'
    },
    {
      'phoneNumber': '12153518780',
      'message': 'This is the code 2344 to verify your account'
    },
    {
     'phoneNumber': '988518780',
     'message': 'This is the code 2344 to verify your account'
    }
]

        createPushNotificationsJobs(jobs, queue);
        assert.equal(queue.testMode.jobs.length, 3);
    });	    


})
