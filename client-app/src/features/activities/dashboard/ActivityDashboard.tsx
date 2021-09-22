import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


interface Props {
    activities: Activity[];
    submitting: boolean;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default observer(function ActivityDashboard({ activities, createOrEdit, deleteActivity, submitting }: Props) {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList submitting={submitting} activities={activities} deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails />}
                {editMode &&
                    <ActivityForm submitting={submitting} createOrEdit={createOrEdit} />
                }
            </Grid.Column>
        </Grid>
    )
})