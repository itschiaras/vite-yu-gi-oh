<template>
    <div class="row pt-3">
        <div class="col d-flex justify-content-center ">
            <form class="d-flex w-50">
            <div class="me-2">
                <input type="text" class="form-control" id="cardname" placeholder="Search name">
            </div>
            <select class="form-select me-2" id="searchArchetype">
                <option selected>Chose...</option>
                <option value="1">One</option>
            </select>
            <div>
                <button type="submit" class="btn btn-primary">Search</button>
            </div>
        </form>
        </div>
        
    </div>
        
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style lang="scss" scoped></style>