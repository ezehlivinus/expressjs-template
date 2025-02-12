define({ "api": [
  {
    "type": "get",
    "url": "/users/userId/posts/:id",
    "title": "Detail",
    "description": "<p>Retrieve a post : entity <code>Post</code> does not exist on this app. This is for demonstration of how apidocjs works as seen in the navigation bar</p>",
    "name": "GetPost",
    "group": "Posts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>posts unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/posts.js",
    "groupTitle": "Posts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create",
    "description": "<p>Create a user</p>",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example: all are required",
          "content": "{\n       \"email\": \"email address of the user.\",\n       \"lastName\": \"lastName Lastname of the user\",\n       \"password\": \"password address of the user\",\n       \"firstName\": \"firstName of the user\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete",
    "description": "<p>Delete a user</p>",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the user's id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Detail",
    "description": "<p>Retrieve a user | shows user's detail</p>",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List",
    "description": "<p>Retrieve/List all users</p>",
    "name": "ListUsers",
    "group": "Users",
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update",
    "description": "<p>Update a user | updates user's detail or information</p>",
    "name": "PutUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the user's id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: all or anyone of these",
          "content": "{\n       \"email\": \"email address of the user.\",\n       \"lastName\": \"lastName Lastname of the user\",\n       \"firstName\": \"firstName of the user\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentations/routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually true</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request usually success</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>This contains the resource (an object or array of objects) and/or other required particulars</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200/201 OK\n{\n  \"status\": true,\n  \"message\": \"success\",\n  \"data\": { ... } or [ {}, {}, ...]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the response usually false</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>This is the info about the request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 xxx\n{\n  \"status\": false,\n  \"message\": \"info about the error if any\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
