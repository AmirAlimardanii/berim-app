<template>
    <div class="container  mx-auto p-4 my-2">

        <div role="alert" class="alert alert-info alert-outline">
            <Icon name="tabler:pinned-filled" size="22" />
            <h1 class="card">Add Your Favorite Locations</h1>
        </div>
     
      <Form class="mx-auto max-w-xl mt-4 w-100">
        <fieldset class="fieldset">
  <legend class="fieldset-legend">Name</legend>
  <Field name="name" type="text" class="input w-100" placeholder="name ...." />
</fieldset>

<fieldset class="fieldset">
  <legend class="fieldset-legend">Description</legend>
  <Field type="textarea" name="description" class="textarea h-24 w-100" placeholder="description ..." />
</fieldset>

  <fieldset class="fieldset">
  <legend class="fieldset-legend">Latitude</legend>
  <Field name="latitude" type="number" class="input w-100" placeholder="latitude ..." />
</fieldset>


  <fieldset class="fieldset">
  <legend class="fieldset-legend">Longitude</legend>
  <Field name="longitude" type="number" class="input w-100" placeholder="longitude ..." />
</fieldset>


<div class="flex justify-between mt-2">
<button class="btn  btn-square">
        <Icon name="tabler:arrow-left" size="22" />
    </button>


    <button class="btn btn-primary">Add
        <Icon name="tabler:plus" size="22" />
    </button>

</div>
</Form>
      </div>


</template>



<script setup lang="ts">
import { InsertLocation } from '~/lib/db/schema';
import {toTypedSchema} from '@vee-validate/zod'



const {handleSubmit} =useForm({
  validationSchema : toTypedSchema(InsertLocation)
})
</script>