<template>
    <div class="container  mx-auto p-4 my-2">

        <div role="alert" class="alert alert-info alert-outline">
            <Icon name="tabler:pinned-filled" size="22" />
            <h1 class="card">Add Your Favorite Locations</h1>
        </div>
     
      <form class="mx-auto max-w-xl mt-4 w-100" @submit.prevent="onSubmit">
        <fieldset class="fieldset">
  <legend class="fieldset-legend">Name</legend>
  <Field name="name" type="text" class="input w-100" :class="{'input-error': errors.name}" placeholder="name ...." :disabled="loading" />
  <p v-if="errors.name" class="fieldset-label text-error font-bold">{{ errors.name }}</p>
</fieldset>

<fieldset class="fieldset">
  <legend class="fieldset-legend">Description</legend>
  <Field type="textarea" name="description" class="textarea h-24 w-100" :class="{'input-error': errors.description}" placeholder="description ..." :disabled="loading" />
  <p v-if="errors.description" class="fieldset-label text-error font-bold">{{ errors.description }}</p>

</fieldset>

  <fieldset class="fieldset">
  <legend class="fieldset-legend">Latitude</legend>
  <Field name="lat" type="number" class="input w-100"  :class="{'input-error': errors.lat}" placeholder="latitude ..." :disabled="loading" />
  <p v-if="errors.lat" class="fieldset-label text-error font-bold">{{ errors.lat }}</p>

</fieldset>


  <fieldset class="fieldset">
  <legend class="fieldset-legend">Longitude</legend>
  <Field name="long" type="number" class="input w-100" :class="{'input-error': errors.long}" placeholder="longitude ..." :disabled="loading" />
  <p v-if="errors.long" class="fieldset-label text-error font-bold">{{ errors.long }}</p>

</fieldset>


<div class="flex justify-between mt-2">
<button @click="navigateTo('/dashboard')" class="btn  btn-square" :disabled="loading">
  <span v-if="loading" class="loading loading-spinner loading-md"></span>
        <Icon v-else name="tabler:arrow-left" size="22" />
    </button>


    <button class="btn btn-primary" :disabled="loading">Add
      <span v-if="loading" class="loading loading-spinner loading-md"></span>
        <Icon v-else name="tabler:plus" size="22" />
    </button>

</div>
</form>
      </div>


      <div v-if="submitError" class="toast toast-end">
  <div class="alert alert-error">
    <span>{{submitError}}</span>
  </div>

</div>


</template>



<script setup lang="ts">
import { InsertLocation } from '~/lib/db/schema';
import {toTypedSchema} from '@vee-validate/zod'

const submitError = ref<string|null>(null)
const loading = ref<boolean>(false)


const {handleSubmit,errors, meta} =useForm({
  validationSchema : toTypedSchema(InsertLocation)
})


const onSubmit = handleSubmit(async (values) =>{
  try {
    submitError.value = null
    loading.value = true
    const res = await $fetch('/api/location', {
    method: 'POST',
    body: values
  })
  console.log(res);
  } catch (e) {
    const error = e as Error
    submitError.value = error.message || 'An Unknow ERROR Accured';

    const timeout = setTimeout(() => {
     submitError.value = null
     }, 3000);

  }finally{
    loading.value = false
  }
})


onBeforeRouteLeave(() =>{
  if(meta.value.dirty){
    const confirm = window.confirm('Are You Sure You Want To Leave ?')

    if(!confirm) return false
  }

  return true
  
})
</script>