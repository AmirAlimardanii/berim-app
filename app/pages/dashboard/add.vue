<template>
    <div class="container  mx-auto p-4 my-2">

        <div role="alert" class="alert alert-info alert-outline">
            <Icon name="tabler:pinned-filled" size="22" />
            <h1 class="card">Add Your Favorite Locations</h1>
        </div>
     
      <form class="mx-auto max-w-xl mt-4 w-100" @submit.prevent="onSubmit">
        <fieldset class="fieldset">
  <legend class="fieldset-legend">Name</legend>
  <Field name="name" type="text" class="input w-100" :class="{'input-error': errors.name}" placeholder="name ...." />
  <p v-if="errors.name" class="fieldset-label text-error font-bold">{{ errors.name }}</p>
</fieldset>

<fieldset class="fieldset">
  <legend class="fieldset-legend">Description</legend>
  <Field type="textarea" name="description" class="textarea h-24 w-100" :class="{'input-error': errors.description}" placeholder="description ..." />
  <p v-if="errors.description" class="fieldset-label text-error font-bold">{{ errors.description }}</p>

</fieldset>

  <fieldset class="fieldset">
  <legend class="fieldset-legend">Latitude</legend>
  <Field name="lat" type="number" class="input w-100"  :class="{'input-error': errors.lat}" placeholder="latitude ..." />
  <p v-if="errors.lat" class="fieldset-label text-error font-bold">{{ errors.lat }}</p>

</fieldset>


  <fieldset class="fieldset">
  <legend class="fieldset-legend">Longitude</legend>
  <Field name="long" type="number" class="input w-100" :class="{'input-error': errors.long}" placeholder="longitude ..." />
  <p v-if="errors.long" class="fieldset-label text-error font-bold">{{ errors.long }}</p>

</fieldset>


<div class="flex justify-between mt-2">
<button class="btn  btn-square">
        <Icon name="tabler:arrow-left" size="22" />
    </button>


    <button class="btn btn-primary">Add
        <Icon name="tabler:plus" size="22" />
    </button>

</div>
</form>
      </div>


</template>



<script setup lang="ts">
import { InsertLocation } from '~/lib/db/schema';
import {toTypedSchema} from '@vee-validate/zod'



const {handleSubmit,errors} =useForm({
  validationSchema : toTypedSchema(InsertLocation)
})


const onSubmit = handleSubmit((values) =>{
  console.log(values);
})
</script>