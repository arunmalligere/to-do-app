import React from 'react';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    timeline: {
        paddingTop: "10vh",
        paddingLeft: "2%",
        paddingRight: "2%",
    }
});
 
const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]
 
const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

// type schedulerProps = {
//     scheduledDateDate: string,
// }

const Scheduler: React.FC<{}> = () => {
    const classes = useStyles();
    return (
      <div className={ classes.timeline}>
   <Timeline
          groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
          visibleTimeStart={moment().add(-6, 'hour')}
          visibleTimeEnd={moment().add(6, 'hour')}
            />
    </div>
  );
}

export default Scheduler;
