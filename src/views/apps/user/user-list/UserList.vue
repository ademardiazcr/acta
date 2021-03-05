<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>

  <div id="page-user-list">

    <vx-card ref="filterCard" title="Filters" class="user-list-filters mb-8" actionButtons @refresh="resetColFilters" @remove="resetColFilters">
      <div class="vx-row">
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Role</label>
          <v-select :options="roleOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="roleFilter" class="mb-4 md:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Status</label>
          <v-select :options="statusOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="statusFilter" class="mb-4 md:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Verified</label>
          <v-select :options="isVerifiedOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="isVerifiedFilter" class="mb-4 sm:mb-0" />
        </div>
        <div class="vx-col md:w-1/4 sm:w-1/2 w-full">
          <label class="text-sm opacity-75">Department</label>
          <v-select :options="departmentOptions" :clearable="false" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="departmentFilter" />
        </div>
      </div>
    </vx-card>

    <div class="vx-card p-6">

      <div class="flex flex-wrap items-center">

        <!-- ITEMS PER PAGE -->
        <div class="flex-grow">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
              <span class="mr-2">{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ usersData.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : usersData.length }} of {{ usersData.length }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(25)">
                <span>25</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(30)">
                <span>30</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
          <vs-input class="sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4" v-model="searchQuery" @input="updateSearchQuery" placeholder="Buscar..." />
          <!-- <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button> -->

          <!-- ACTION - DROPDOWN -->
          <!--vs-dropdown vs-trigger-click class="cursor-pointer">

            <div class="p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32">
              <span class="mr-2 leading-none">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Archive</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>Print</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                  <span>CSV</span>
                </span>
              </vs-dropdown-item>

            </vs-dropdown-menu>
          </vs-dropdown-->
      </div>


      <!-- AgGrid Table -->
      <ag-grid-vue
        ref="agGridTable"
        :components="components"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="users"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
        :enableRtl="$vs.rtl">
      </ag-grid-vue>

      <vs-pagination
        :total="totalPages"
        :max="7"
        v-model="currentPage" />

    </div>
  </div>

</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'

// Store Module
import moduleUserManagement from '@/store/user-management/moduleUserManagement.js'

// Cell Renderer
import CellRendererLink from './cell-renderer/CellRendererLink.vue'
import CellRendererStatus from './cell-renderer/CellRendererStatus.vue'
import CellRendererVerified from './cell-renderer/CellRendererVerified.vue'
import CellRendererActions from './cell-renderer/CellRendererActions.vue'


export default {
  components: {
    AgGridVue,
    vSelect,

    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions
  },
  data () {
    return {

       users: [
    {
      'id': 268,
      'username': 'adoptionism744',
      'avatar': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      'email': 'angelo@sashington.com',
      'name': 'Angelo Sashington',
      'dob': '28 January 1998',
      'gender': 'male',
      'country': 'Bolivia',
      'role': 'admin',
      'status': 'active',
      'is_verified': true,
      'department': 'sales',
      'company': 'WinDon Technologies Pvt Ltd',
      'mobile': '+65958951757',
      'website': 'https://rowboat.com/insititious/Angelo',
      'languages_known': ['English', 'Arabic', 'Español'],
      'contact_options': ['email', 'message', 'phone'],
      'location': {
        'add_line_1': 'A-65, Belvedere Streets',
        'add_line_2': '',
        'post_code': '1868',
        'city': 'New York',
        'state': 'New York',
        'country': 'United States'
      },
      'social_links': {
        'twitter': 'https://twitter.com/adoptionism744',
        'facebook': 'https://www.facebook.com/adoptionism664',
        'instagram': 'https://www.instagram.com/adopt-ionism744/',
        'github': 'https://github.com/madop818',
        'codepen': 'https://codepen.io/adoptism243',
        'slack': '@adoptionism744'
      },
      'permissions': {
        'users': {
          'read': true,
          'write': false,
          'create': false,
          'delete': false
        },
        'posts': {
          'read': true,
          'write': true,
          'create': true,
          'delete': true
        },
        'comments': {
          'read': true,
          'write': false,
          'create': true,
          'delete': false
        }

      }
    },
    {
      'id': 269,
      'username': 'demodulation463',
      'avatar': require('@/assets/images/portrait/small/avatar-s-2.jpg'),
      'email': 'rubi@ortwein.com',
      'name': 'Rubi Ortwein',
      'country': 'Syria',
      'role': 'user',
      'status': 'blocked',
      'is_verified': false,
      'department': 'development'
    },
    {
      'id': 270,
      'username': 'undivorced341',
      'avatar': require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      'email': 'donnette@charania.com',
      'name': 'Donnette Charania',
      'country': 'Iraq',
      'role': 'staff',
      'status': 'deactivated',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 271,
      'username': 'bumbo426',
      'avatar': require('@/assets/images/portrait/small/avatar-s-12.jpg'),
      'email': 'ardith@duffett.com',
      'name': 'Ardith Duffett',
      'country': 'Estonia',
      'role': 'user',
      'status': 'active',
      'is_verified': false,
      'department': 'sales'
    },
    {
      'id': 272,
      'username': 'ectodactylism214',
      'avatar': require('@/assets/images/portrait/small/avatar-s-16.jpg'),
      'email': 'antone@berman.com',
      'name': 'Antone Berman',
      'country': 'India',
      'role': 'user',
      'status': 'blocked',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 273,
      'username': 'panathenaic825',
      'avatar': require('@/assets/images/portrait/small/avatar-s-18.jpg'),
      'email': 'maryann@gour.com',
      'name': 'Maryann Gour',
      'country': 'Solomon Islands',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 274,
      'username': 'reptilious612',
      'avatar': require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      'email': 'holli@vanduyne.com',
      'name': 'Holli Vanduyne',
      'country': 'Lebanon',
      'role': 'staff',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 275,
      'username': 'candid910',
      'avatar': require('@/assets/images/portrait/small/avatar-s-26.jpg'),
      'email': 'juanita@sartoris.com',
      'name': 'Juanita Sartoris',
      'country': 'Papua New Guinea',
      'role': 'staff',
      'status': 'active',
      'is_verified': true,
      'department': 'management'
    },
    {
      'id': 276,
      'username': 'ferrotungsten928',
      'avatar': require('@/assets/images/portrait/small/avatar-s-20.jpg'),
      'email': 'lia@morga.com',
      'name': 'Lia Morga',
      'country': 'Malaysia',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'development'
    },
    {
      'id': 277,
      'username': 'fibered345',
      'avatar': require('@/assets/images/portrait/small/avatar-s-14.jpg'),
      'email': 'theo@quatrevingt.com',
      'name': 'Theo Quatrevingt',
      'country': 'Nepal',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 278,
      'username': 'nonenclosure246',
      'avatar': require('@/assets/images/portrait/small/avatar-s-10.jpg'),
      'email': 'lynwood@flud.com',
      'name': 'Lynwood Flud',
      'country': 'Russia',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 279,
      'username': 'uncandied531',
      'avatar': require('@/assets/images/portrait/small/avatar-s-13.jpg'),
      'email': 'kaitlin@kahola.com',
      'name': 'Kaitlin Kahola',
      'country': 'Latvia',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 280,
      'username': 'errancy403',
      'avatar': require('@/assets/images/portrait/small/avatar-s-4.jpg'),
      'email': 'alvin@car.com',
      'name': 'Alvin Car',
      'country': 'Yemen',
      'role': 'admin',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 281,
      'username': 'renillidae759',
      'avatar': require('@/assets/images/portrait/small/avatar-s-16.jpg'),
      'email': 'justin@jacquelin.com',
      'name': 'Justin Jacquelin',
      'country': 'Turkmenistan',
      'role': 'user',
      'status': 'blocked',
      'is_verified': true,
      'department': 'management'
    },
    {
      'id': 282,
      'username': 'jellylike89',
      'avatar': require('@/assets/images/portrait/small/avatar-s-20.jpg'),
      'email': 'chloe@tague.com',
      'name': 'Chloe Tague',
      'country': 'Pakistan',
      'role': 'staff',
      'status': 'active',
      'is_verified': true,
      'department': 'development'
    },
    {
      'id': 283,
      'username': 'ocular772',
      'avatar': require('@/assets/images/portrait/small/avatar-s-6.jpg'),
      'email': 'zola@tauarez.com',
      'name': 'Zola Tauarez',
      'country': 'Dominica',
      'role': 'admin',
      'status': 'deactivated',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 284,
      'username': 'oxgang923',
      'avatar': require('@/assets/images/portrait/small/avatar-s-11.jpg'),
      'email': 'wm@cieszynski.com',
      'name': 'Wm Cieszynski',
      'country': 'South Korea',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    },
    {
      'id': 285,
      'username': 'ideationally882',
      'avatar': require('@/assets/images/portrait/small/avatar-s-1.jpg'),
      'email': 'hope@mobus.com',
      'name': 'Hope Mobus',
      'country': 'United States of America',
      'role': 'user',
      'status': 'active',
      'is_verified': true,
      'department': 'sales'
    }
  ],

      // Filter Options
      roleFilter: { label: 'All', value: 'all' },
      roleOptions: [
        { label: 'All', value: 'all' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Staff', value: 'staff' }
      ],

      statusFilter: { label: 'All', value: 'all' },
      statusOptions: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Blocked', value: 'blocked' }
      ],

      isVerifiedFilter: { label: 'All', value: 'all' },
      isVerifiedOptions: [
        { label: 'All', value: 'all' },
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
      ],

      departmentFilter: { label: 'All', value: 'all' },
      departmentOptions: [
        { label: 'All', value: 'all' },
        { label: 'Sales', value: 'sales' },
        { label: 'Development', value: 'development' },
        { label: 'Management', value: 'management' }
      ],

      searchQuery: '',

      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },

   /*   columnDefs: [
        {
          headerName: 'Cod Cliente',
          field: 'COD_CLIENTE',
          width: 200,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },
        {
          headerName: 'Nombre',
          field: 'NOM_CLIENTE',
          filter: true,
          width: 210,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 225
        },
        {
          headerName: 'Pais',
          field: 'country',
          filter: true,
          width: 150
        },
        {
          headerName: 'Rol',
          field: 'role',
          filter: true,
          width: 150
        },
        {
          headerName: 'Estado',
          field: 'IND_ESTADO',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus'
        }, 
        {
          headerName: 'Departmento',
          field: 'department',
          filter: true,
          width: 150
        }, 
      ],*/

        columnDefs: [
        {
          headerName: 'ID',
          field: 'id',
          width: 125,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },
        {
          headerName: 'Username',
          field: 'username',
          filter: true,
          width: 210,
          cellRendererFramework: 'CellRendererLink'
        },
        {
          headerName: 'Email',
          field: 'email',
          filter: true,
          width: 225
        },
        {
          headerName: 'Name',
          field: 'name',
          filter: true,
          width: 200
        },
        {
          headerName: 'Country',
          field: 'country',
          filter: true,
          width: 150
        },
        {
          headerName: 'Role',
          field: 'role',
          filter: true,
          width: 150
        },
        {
          headerName: 'Status',
          field: 'status',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus'
        },
        {
          headerName: 'Verified',
          field: 'is_verified',
          filter: true,
          width: 125,
          cellRendererFramework: 'CellRendererVerified',
          cellClass: 'text-center'
        },
        {
          headerName: 'Department',
          field: 'department',
          filter: true,
          width: 150
        },
        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions'
        }
      ],

      // Cell Renderer Components
      components: {
        CellRendererLink,
        CellRendererStatus,
        CellRendererVerified,
        CellRendererActions
      }
    }
  },
  watch: {
    roleFilter (obj) {
      this.setColumnFilter('role', obj.value)
    },
    statusFilter (obj) {
      this.setColumnFilter('status', obj.value)
    },
    isVerifiedFilter (obj) {
      const val = obj.value === 'all' ? 'all' : obj.value === 'yes' ? 'true' : 'false'
      this.setColumnFilter('is_verified', val)
    },
    departmentFilter (obj) {
      this.setColumnFilter('department', obj.value)
    }
  },
  computed: {
    usersData () {
      return this.$store.state.userManagement.users
    },
    paginationPageSize () {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
    },
    totalPages () {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get () {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set (val) {
        this.gridApi.paginationGoToPage(val - 1)
      }
    }
  },
  methods: {
    setColumnFilter (column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if (val !== 'all') {
        modelObj = { type: 'equals', filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters () {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      // Reset Filter Options
      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = { label: 'All', value: 'all' }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery (val) {
      this.gridApi.setQuickFilter(val)
    }
  },
  mounted () {
    this.gridApi = this.gridOptions.api

    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */
    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector('.ag-header-container')
      header.style.left = `-${  String(Number(header.style.transform.slice(11, -3)) + 9)  }px`
    }
  },
  created () {
    if (!moduleUserManagement.isRegistered) {
      this.$store.registerModule('userManagement', moduleUserManagement)
      moduleUserManagement.isRegistered = true
    }
    this.$store.dispatch('userManagement/fetchUsers').catch(err => { console.error(err) })
  }
}

</script>

<style lang="scss">
#page-user-list {
  .user-list-filters {
    .vs__actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-58%);
    }
  }
}
</style>
