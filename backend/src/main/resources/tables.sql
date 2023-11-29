-- Table for organizations
CREATE TABLE organizations (
    id SERIAL PRIMARY KEY,
    organization_number VARCHAR(255) NOT NULL UNIQUE,
    company_name VARCHAR(255) NOT NULL
);
-- Table for contact information
CREATE TABLE contact_information (
     id SERIAL PRIMARY KEY,
     full_name VARCHAR(255) NOT NULL,
     phone_number VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL UNIQUE
);

-- Table for applications
CREATE TABLE applications (
      id SERIAL PRIMARY KEY,
      organization_id INTEGER REFERENCES organizations(id),
      contact_id INTEGER REFERENCES contact_information(id),
      department_application VARCHAR(255),
      account_number VARCHAR(255) NOT NULL,
      desired_credit_limit DECIMAL(10, 2),
      attachment_info_id INTEGER,
      created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'UTC')
);

-- Table for attachments
CREATE TABLE attachment_info (
     id SERIAL PRIMARY KEY,
     required BOOLEAN NOT NULL,
     notes TEXT
);

-- Table for submission confirmations
CREATE TABLE submission_confirmations (
    id SERIAL PRIMARY KEY,
    application_id INTEGER REFERENCES applications(id),
    submission_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    response_due VARCHAR(255) NOT NULL
);